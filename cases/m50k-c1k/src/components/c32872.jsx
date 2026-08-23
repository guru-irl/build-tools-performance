import React from 'react';
const LABEL_32872 = 'component_32872';
export function Component32872({ value = 32872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32872, 'data-value': derived.doubled }, children);
}
export default Component32872;
