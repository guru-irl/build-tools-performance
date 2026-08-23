import React from 'react';
const LABEL_19565 = 'component_19565';
export function Component19565({ value = 19565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19565, 'data-value': derived.doubled }, children);
}
export default Component19565;
