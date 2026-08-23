import React from 'react';
const LABEL_19721 = 'component_19721';
export function Component19721({ value = 19721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19721, 'data-value': derived.doubled }, children);
}
export default Component19721;
