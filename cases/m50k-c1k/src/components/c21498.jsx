import React from 'react';
const LABEL_21498 = 'component_21498';
export function Component21498({ value = 21498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21498, 'data-value': derived.doubled }, children);
}
export default Component21498;
