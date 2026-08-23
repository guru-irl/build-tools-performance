import React from 'react';
const LABEL_32848 = 'component_32848';
export function Component32848({ value = 32848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32848, 'data-value': derived.doubled }, children);
}
export default Component32848;
