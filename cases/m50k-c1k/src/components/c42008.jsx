import React from 'react';
const LABEL_42008 = 'component_42008';
export function Component42008({ value = 42008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42008, 'data-value': derived.doubled }, children);
}
export default Component42008;
