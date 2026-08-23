import React from 'react';
const LABEL_45902 = 'component_45902';
export function Component45902({ value = 45902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45902, 'data-value': derived.doubled }, children);
}
export default Component45902;
