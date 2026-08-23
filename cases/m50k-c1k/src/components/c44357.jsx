import React from 'react';
const LABEL_44357 = 'component_44357';
export function Component44357({ value = 44357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44357, 'data-value': derived.doubled }, children);
}
export default Component44357;
