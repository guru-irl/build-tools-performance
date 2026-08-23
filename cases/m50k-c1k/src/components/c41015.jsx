import React from 'react';
const LABEL_41015 = 'component_41015';
export function Component41015({ value = 41015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41015, 'data-value': derived.doubled }, children);
}
export default Component41015;
