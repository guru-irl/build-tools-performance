import React from 'react';
const LABEL_41008 = 'component_41008';
export function Component41008({ value = 41008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41008, 'data-value': derived.doubled }, children);
}
export default Component41008;
