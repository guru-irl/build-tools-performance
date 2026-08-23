import React from 'react';
const LABEL_19892 = 'component_19892';
export function Component19892({ value = 19892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19892, 'data-value': derived.doubled }, children);
}
export default Component19892;
