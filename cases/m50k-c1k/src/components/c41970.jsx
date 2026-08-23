import React from 'react';
const LABEL_41970 = 'component_41970';
export function Component41970({ value = 41970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41970, 'data-value': derived.doubled }, children);
}
export default Component41970;
