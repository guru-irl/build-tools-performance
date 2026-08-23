import React from 'react';
const LABEL_19347 = 'component_19347';
export function Component19347({ value = 19347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19347, 'data-value': derived.doubled }, children);
}
export default Component19347;
