import React from 'react';
const LABEL_22632 = 'component_22632';
export function Component22632({ value = 22632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22632, 'data-value': derived.doubled }, children);
}
export default Component22632;
