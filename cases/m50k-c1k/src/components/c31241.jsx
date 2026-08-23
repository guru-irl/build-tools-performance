import React from 'react';
const LABEL_31241 = 'component_31241';
export function Component31241({ value = 31241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31241, 'data-value': derived.doubled }, children);
}
export default Component31241;
