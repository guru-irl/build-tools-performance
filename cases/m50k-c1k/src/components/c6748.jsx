import React from 'react';
const LABEL_6748 = 'component_6748';
export function Component6748({ value = 6748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6748, 'data-value': derived.doubled }, children);
}
export default Component6748;
