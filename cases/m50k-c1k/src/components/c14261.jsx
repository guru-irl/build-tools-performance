import React from 'react';
const LABEL_14261 = 'component_14261';
export function Component14261({ value = 14261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14261, 'data-value': derived.doubled }, children);
}
export default Component14261;
