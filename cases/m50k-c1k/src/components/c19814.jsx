import React from 'react';
const LABEL_19814 = 'component_19814';
export function Component19814({ value = 19814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19814, 'data-value': derived.doubled }, children);
}
export default Component19814;
