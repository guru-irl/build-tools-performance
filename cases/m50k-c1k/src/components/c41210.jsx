import React from 'react';
const LABEL_41210 = 'component_41210';
export function Component41210({ value = 41210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41210, 'data-value': derived.doubled }, children);
}
export default Component41210;
