import React from 'react';
const LABEL_19835 = 'component_19835';
export function Component19835({ value = 19835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19835, 'data-value': derived.doubled }, children);
}
export default Component19835;
