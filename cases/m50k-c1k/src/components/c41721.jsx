import React from 'react';
const LABEL_41721 = 'component_41721';
export function Component41721({ value = 41721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41721, 'data-value': derived.doubled }, children);
}
export default Component41721;
