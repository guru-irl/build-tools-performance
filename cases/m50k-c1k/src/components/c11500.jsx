import React from 'react';
const LABEL_11500 = 'component_11500';
export function Component11500({ value = 11500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11500, 'data-value': derived.doubled }, children);
}
export default Component11500;
