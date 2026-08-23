import React from 'react';
const LABEL_4404 = 'component_4404';
export function Component4404({ value = 4404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4404, 'data-value': derived.doubled }, children);
}
export default Component4404;
