import React from 'react';
const LABEL_30142 = 'component_30142';
export function Component30142({ value = 30142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30142, 'data-value': derived.doubled }, children);
}
export default Component30142;
