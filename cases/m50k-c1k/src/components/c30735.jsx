import React from 'react';
const LABEL_30735 = 'component_30735';
export function Component30735({ value = 30735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30735, 'data-value': derived.doubled }, children);
}
export default Component30735;
