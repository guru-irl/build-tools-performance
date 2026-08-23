import React from 'react';
const LABEL_35447 = 'component_35447';
export function Component35447({ value = 35447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35447, 'data-value': derived.doubled }, children);
}
export default Component35447;
