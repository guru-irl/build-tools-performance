import React from 'react';
const LABEL_30035 = 'component_30035';
export function Component30035({ value = 30035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30035, 'data-value': derived.doubled }, children);
}
export default Component30035;
