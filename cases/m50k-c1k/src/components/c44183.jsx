import React from 'react';
const LABEL_44183 = 'component_44183';
export function Component44183({ value = 44183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44183, 'data-value': derived.doubled }, children);
}
export default Component44183;
