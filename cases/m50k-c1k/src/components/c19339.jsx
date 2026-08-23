import React from 'react';
const LABEL_19339 = 'component_19339';
export function Component19339({ value = 19339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19339, 'data-value': derived.doubled }, children);
}
export default Component19339;
