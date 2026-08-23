import React from 'react';
const LABEL_19126 = 'component_19126';
export function Component19126({ value = 19126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19126, 'data-value': derived.doubled }, children);
}
export default Component19126;
