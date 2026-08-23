import React from 'react';
const LABEL_4146 = 'component_4146';
export function Component4146({ value = 4146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4146, 'data-value': derived.doubled }, children);
}
export default Component4146;
