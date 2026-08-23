import React from 'react';
const LABEL_19210 = 'component_19210';
export function Component19210({ value = 19210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19210, 'data-value': derived.doubled }, children);
}
export default Component19210;
