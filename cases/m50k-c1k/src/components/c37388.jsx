import React from 'react';
const LABEL_37388 = 'component_37388';
export function Component37388({ value = 37388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37388, 'data-value': derived.doubled }, children);
}
export default Component37388;
