import React from 'react';
const LABEL_26067 = 'component_26067';
export function Component26067({ value = 26067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26067, 'data-value': derived.doubled }, children);
}
export default Component26067;
