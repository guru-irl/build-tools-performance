import React from 'react';
const LABEL_30223 = 'component_30223';
export function Component30223({ value = 30223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30223, 'data-value': derived.doubled }, children);
}
export default Component30223;
