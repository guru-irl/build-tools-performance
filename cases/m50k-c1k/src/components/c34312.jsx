import React from 'react';
const LABEL_34312 = 'component_34312';
export function Component34312({ value = 34312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34312, 'data-value': derived.doubled }, children);
}
export default Component34312;
