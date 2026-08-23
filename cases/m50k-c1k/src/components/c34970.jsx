import React from 'react';
const LABEL_34970 = 'component_34970';
export function Component34970({ value = 34970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34970, 'data-value': derived.doubled }, children);
}
export default Component34970;
