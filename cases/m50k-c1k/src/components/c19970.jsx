import React from 'react';
const LABEL_19970 = 'component_19970';
export function Component19970({ value = 19970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19970, 'data-value': derived.doubled }, children);
}
export default Component19970;
