import React from 'react';
const LABEL_42871 = 'component_42871';
export function Component42871({ value = 42871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42871, 'data-value': derived.doubled }, children);
}
export default Component42871;
