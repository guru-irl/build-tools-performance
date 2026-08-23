import React from 'react';
const LABEL_166 = 'component_166';
export function Component166({ value = 166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_166, 'data-value': derived.doubled }, children);
}
export default Component166;
