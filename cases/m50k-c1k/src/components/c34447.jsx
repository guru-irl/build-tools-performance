import React from 'react';
const LABEL_34447 = 'component_34447';
export function Component34447({ value = 34447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34447, 'data-value': derived.doubled }, children);
}
export default Component34447;
