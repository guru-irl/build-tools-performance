import React from 'react';
const LABEL_41880 = 'component_41880';
export function Component41880({ value = 41880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41880, 'data-value': derived.doubled }, children);
}
export default Component41880;
