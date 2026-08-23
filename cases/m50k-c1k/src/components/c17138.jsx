import React from 'react';
const LABEL_17138 = 'component_17138';
export function Component17138({ value = 17138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17138, 'data-value': derived.doubled }, children);
}
export default Component17138;
