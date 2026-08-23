import React from 'react';
const LABEL_41242 = 'component_41242';
export function Component41242({ value = 41242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41242, 'data-value': derived.doubled }, children);
}
export default Component41242;
