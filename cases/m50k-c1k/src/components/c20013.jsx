import React from 'react';
const LABEL_20013 = 'component_20013';
export function Component20013({ value = 20013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20013, 'data-value': derived.doubled }, children);
}
export default Component20013;
