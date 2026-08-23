import React from 'react';
const LABEL_37183 = 'component_37183';
export function Component37183({ value = 37183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37183, 'data-value': derived.doubled }, children);
}
export default Component37183;
