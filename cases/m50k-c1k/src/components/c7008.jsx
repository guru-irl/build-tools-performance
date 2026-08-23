import React from 'react';
const LABEL_7008 = 'component_7008';
export function Component7008({ value = 7008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7008, 'data-value': derived.doubled }, children);
}
export default Component7008;
