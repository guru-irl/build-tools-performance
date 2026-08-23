import React from 'react';
const LABEL_37938 = 'component_37938';
export function Component37938({ value = 37938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37938, 'data-value': derived.doubled }, children);
}
export default Component37938;
