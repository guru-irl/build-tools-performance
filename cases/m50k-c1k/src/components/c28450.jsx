import React from 'react';
const LABEL_28450 = 'component_28450';
export function Component28450({ value = 28450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28450, 'data-value': derived.doubled }, children);
}
export default Component28450;
