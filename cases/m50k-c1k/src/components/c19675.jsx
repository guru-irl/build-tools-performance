import React from 'react';
const LABEL_19675 = 'component_19675';
export function Component19675({ value = 19675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19675, 'data-value': derived.doubled }, children);
}
export default Component19675;
