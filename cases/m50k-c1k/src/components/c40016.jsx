import React from 'react';
const LABEL_40016 = 'component_40016';
export function Component40016({ value = 40016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40016, 'data-value': derived.doubled }, children);
}
export default Component40016;
