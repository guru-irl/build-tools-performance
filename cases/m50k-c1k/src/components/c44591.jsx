import React from 'react';
const LABEL_44591 = 'component_44591';
export function Component44591({ value = 44591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44591, 'data-value': derived.doubled }, children);
}
export default Component44591;
