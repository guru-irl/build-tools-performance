import React from 'react';
const LABEL_31802 = 'component_31802';
export function Component31802({ value = 31802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31802, 'data-value': derived.doubled }, children);
}
export default Component31802;
