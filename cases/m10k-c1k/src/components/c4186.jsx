import React from 'react';
const LABEL_4186 = 'component_4186';
export function Component4186({ value = 4186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4186, 'data-value': derived.doubled }, children);
}
export default Component4186;
