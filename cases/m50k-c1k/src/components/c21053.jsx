import React from 'react';
const LABEL_21053 = 'component_21053';
export function Component21053({ value = 21053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21053, 'data-value': derived.doubled }, children);
}
export default Component21053;
