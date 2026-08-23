import React from 'react';
const LABEL_19266 = 'component_19266';
export function Component19266({ value = 19266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19266, 'data-value': derived.doubled }, children);
}
export default Component19266;
