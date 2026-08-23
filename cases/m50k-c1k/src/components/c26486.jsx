import React from 'react';
const LABEL_26486 = 'component_26486';
export function Component26486({ value = 26486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26486, 'data-value': derived.doubled }, children);
}
export default Component26486;
